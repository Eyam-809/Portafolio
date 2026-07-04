import Gallery from '../components/Gallery'
const img04 = "https://lh3.googleusercontent.com/d/1QJ7fe4O3-j7712Jtznve2TTOsSaFr6Sr";
const Lavida = "https://lh3.googleusercontent.com/d/1vR5pHuFp8Cu0lV9WTn6vA84VSU4qkOo4";
const casagrande = "https://lh3.googleusercontent.com/d/150UJR-VPDNYXNXtTksBXiEh-XY0ZM5Fc";
const Negative = "https://lh3.googleusercontent.com/d/1_8Q97-FtldFeyOaKnIDxrmtO0QxZsPAb";
const Galaxy = "https://lh3.googleusercontent.com/d/1Xv_vbDwNSLBXv-9e-VHFtpRwehuVjoKR";
const Commonside = "https://lh3.googleusercontent.com/d/16lV0GUfQAqlR4i8F6qSzRlwZ7kOw75C7";
const PersonalWork = "https://lh3.googleusercontent.com/d/1dO4PaWuUXDnT0wDHxgkS2Y2v4e1wSVda";


function Home() {
  const items = [
    {
      title: 'Common Side  Effects',
      image: Commonside,
      href: '/commonside',
    },
    {
      title: 'Galaxy of creature',
      image: Galaxy,
      href: '/galaxy',
    },
    {
      title: 'La vida secreta',
      image: Lavida,
      href: '/vida-secreta',
    },
    {
      title: 'Los Casagrandres',
      image: casagrande,
      href: '/los-casagrande',
    },
    {
      title: 'Canceled Project',
      image: Negative,
      href: '/navespace',
      passwordRequired: true,
      password: 'GSP',
      blurred: true,
    },
    {
      title: 'Rey Mysterio',
      image: img04,
      href: '/rey-misterio',
    },
    {
      title: 'Personal Work',
      image: PersonalWork,
      href: '/personal-work',
    }
  ]

  return (
    <main className="container">
      <Gallery items={items} />
    </main>
  )
}

export default Home