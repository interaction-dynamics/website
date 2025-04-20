import { Typography } from '@/components/typography'

export function About() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
        <div className="flex-[1_1_100%]">
          <Typography variant="h1" component="h2" id="about">
            About Us
          </Typography>
          <div className="pt-10 space-y-4">
            <p>
              Interaction Dynamics is a collective of passionate designers,
              developers, and strategists dedicated to transforming your ideas
              into exceptional digital experiences.
            </p>
            <p>
              We believe that the best way to create great products is to work
              closely with our clients to understand their needs and goals.
            </p>
            {/* <p>
            Interaction Dynamics is a collective of designers, developers, and
            researchers who are passionate about creating digital experiences
            that are both engaging and accessible. We believe that the best way
            to create great products is to work closely with our clients to
            understand their needs and goals.
          </p> */}
            <p>
              With over a decade of experience, our developers and designers are
              committed to delivering high-quality solutions for businesses with
              the highest standards.
            </p>
          </div>
        </div>
        <div className="flex-[1_1_100%]"></div>
      </div>
    </main>
  )
}
