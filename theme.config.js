const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © DankCoder.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  darkMode: true,
  cusdis: {
    appId: '2999076b-f214-410a-b95a-22d1047ff828',
    host: 'https://cusdis.com',
    lang: 'en'
  },
}
