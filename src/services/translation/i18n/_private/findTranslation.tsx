import React from 'react'
import { Translations } from '../../_types/translations'
import { Parameters } from '../../_types/parameters'

const splitByArgs = (
  str: string,
  parameters: Parameters
): Array<string | { argName: string }> => {
  let tempStr = str

  const array: Array<string | { argName: string }> = []

  Object.keys(parameters).forEach((argName) => {
    const key = `{{${argName}}}`

    const index = tempStr.indexOf(key)

    if (index === -1) return

    array.push(tempStr.substring(0, index))
    array.push({ argName })

    tempStr = tempStr.substring(index + key.length)
  })

  array.push(tempStr)

  return array
}

export const replaceArgs = (str: string, parameters: Parameters) => {
  const split = splitByArgs(str, parameters)

  const result = split.map((item) => {
    if (typeof item === 'string') {
      return item
    }

    const key = item.argName

    if (key in parameters) {
      return parameters[key]
    }

    return ''
  })

  console.log(
    'str',
    str,
    Object.values(parameters).every((p) => typeof p === 'string')
  )

  if (Object.values(parameters).every((p) => typeof p === 'string')) {
    return result.join('')
  }

  return (
    <>
      {result.map((item, index) => (
        <React.Fragment key={index}>{item}</React.Fragment>
      ))}
    </>
  )
}

export const findTranslation = (
  key: string,
  messages: Translations,
  namespace: string,
  parameters: Parameters = {}
): React.ReactNode | string => {
  const keys = key.split('.')

  const translations = messages[namespace]

  try {
    const str = keys.reduce((acc: Translations | string, key: string) => {
      if (typeof acc === 'string') return acc

      if (acc === undefined) {
        throw new Error(
          `Impossible to find translation ${key} in namespace ${namespace}`
        )
      }

      if (!(key in acc)) {
        throw new Error(
          `Impossible to find translation ${key} in namespace ${namespace}`
        )
      }

      return acc[key]
    }, translations) as string

    return replaceArgs(str, parameters)
  } catch (error) {
    console.error(error)
    return key
  }
}
