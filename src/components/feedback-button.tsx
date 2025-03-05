'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Angry, Smile, Meh, MessageSquare } from 'lucide-react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

const emojis = {
  happy: Smile,
  neutral: Meh,
  sad: Angry,
} as const

function Emoji({
  emoji,
  onClick,
  selected,
}: {
  emoji: string
  onClick: () => void
  selected: boolean
}) {
  const Component =
    emoji in emojis ? emojis[emoji as keyof typeof emojis] : null

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        `p-1.5 rounded-full cursor-pointer text-muted-foreground hover:text-foreground transition-colors hover:bg-accent`,
        selected ? 'bg-accent text-foreground' : ''
      )}
    >
      <span className="text-xl">
        {Component ? <Component className="h-4 w-4" /> : null}
      </span>
    </button>
  )
}

export function FeedbackButton() {
  const [open, setOpen] = useState(false)
  const [feedbackText, setFeedbackText] = useState('')
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null)

  const handleSubmit = () => {
    setOpen(false)
    setTimeout(() => {
      setFeedbackText('')
      setSelectedEmoji(null)
    }, 300)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <MessageSquare className="h-[1.2rem] w-[1.2rem]" />
          <span>Feedback</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[320px] p-0" align="end">
        <div className="rounded-lg bg-background border-none overflow-hidden">
          <div className="p-4 space-y-4">
            <Textarea
              placeholder="Your feedback..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              className="min-h-[90px] bg-transparent border-none p-0 focus-visible:ring-0 resize-none text-sm"
            />
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {Object.keys(emojis).map((emoji) => (
                  <Emoji
                    emoji={emoji}
                    key={emoji}
                    onClick={() => setSelectedEmoji(emoji)}
                    selected={selectedEmoji === emoji}
                  />
                ))}
              </div>
              <Button
                onClick={handleSubmit}
                className="rounded-md px-6"
                disabled={!feedbackText.trim() && !selectedEmoji}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
