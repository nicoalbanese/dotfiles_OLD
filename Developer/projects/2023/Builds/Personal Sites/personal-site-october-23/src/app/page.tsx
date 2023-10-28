import Link from "next/link";

export const metadata = {
  title: "Nico Albanese",
};

export default function Home() {
  return (
    <main className="sm:pl-10 sm:py-16 pl-4 py-10 space-y-4 font-sans font-light text-zinc-600">
      <h1 className="font-medium sm:text-lg">Nico Albanese</h1>
      <ul className="list-disc list-outside px-10 space-y-2 lowercase text-sm sm:text-base">
        <li>Currently building something new</li>
        <li>
          Maintaining <Link href="https://kirimase.dev">Kirimase</Link> - the
          fastest way to build full-stack{" "}
          <Link href="https://nextjs.org">Next.js</Link> apps
        </li>
        <li>
          Previously investing at{" "}
          <Link href="https://ascension.vc">Ascension</Link>, backing companies
          at pre-seed like:
        </li>
        <ul className="list-circle list-outside sm:px-8 px-6 ">
          <li>
            <Link href="https://www.farmlend.co.uk/">FarmLend</Link>
          </li>
          <li>
            <Link href="https://www.hurrcollective.com/">Hurr</Link>
          </li>
          <li>
            <Link href="https://www.epochbiodesign.com/">Epoch Biodesign</Link>
          </li>
          <li>
            <Link href="https://sidequestvr.com/">Sidequest</Link>
          </li>
          <li>
            <Link href="https://www.getthursday.com/">Thursday</Link>
          </li>
          <li>
            <Link href="https://www.monolithai.com/">Monolith</Link>
          </li>
        </ul>
        <li>Like to build things:</li>
        <ul className="list-circle list-outside sm:px-8 px-6">
          <li>
            Dealflow OS - open-source(ish) deal flow management system (
            <Link href="https://www.loom.com/share/8e2852c9e6874e80a1642dc1fb385bea?sid=ead1955d-66e7-46ba-b455-78d3bbd0fb76">
              demo
            </Link>
            {" / "}
            <Link href="https://github.com/nicoalbanese/df-hub-opensource">
              github
            </Link>
            )
          </li>
          <li>
            BasExtend - chrome extension to quickly query and mutate Airtable DB
            (
            <Link href="https://twitter.com/nicoalbanese10/status/1385157904731361280">
              demo
            </Link>
            {" / "}
            <Link href="https://github.com/nicoalbanese/basextend-mvp">
              github
            </Link>
            )
          </li>
          <li>
            Pitch to PDF - chrome extension to download pitch.com presentations
            (
            <Link href="https://github.com/nicoalbanese/pitch-presentation-to-pdf">
              github
            </Link>
            )
          </li>
          <li>
            Debut Sessions - live interactive pitch competition (
            <Link href="https://www.youtube.com/channel/UCqpYTWbwTmvIMQoUAMZ39Mg/videos">
              videos
            </Link>
            )
          </li>
          <li>
            Airtable base for tracking investments and communicating with LPs (
            <Link href="https://www.youtube.com/watch?v=Is60Iji0tZw">demo</Link>
            {" / "}
            <Link href="https://www.airtable.com/universe/expoadDDTsK4qWIzz/vc-portfolio-database-template">
              template
            </Link>
            )
          </li>
        </ul>
        <li>
          Failed music producer (
          <Link href="https://open.spotify.com/track/637FSOGxwwnmU0zFJeKzQ4?si=707a7836e4004726">
            spotify
          </Link>
          {" / "}
          <Link href="https://soundcloud.com/guacmusic">soundcloud</Link>)
        </li>
        <li>Life-long Arsenal fan</li>
        <li>
          <Link href="https://twitter.com/nicoalbanese10">twitter</Link> /{" "}
          <Link href="https://github.com/nicoalbanese">github</Link> /{" "}
          <Link href="linkedin.com/in/nicoalbanese">linkedin</Link>
        </li>
        <li>
          <Link href="mailto:hi@nicoalbanese.com">hi@nicoalbanese.com</Link>
        </li>
      </ul>
    </main>
  );
}
