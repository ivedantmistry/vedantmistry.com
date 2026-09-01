import Base from '../../layouts/Base';
import AboutClient from './AboutClient';

export const metadata = {
  title: 'About',
  description:
    "Vedant Mistry is a software engineer, startup founder, and passionate thinker based in Stuttgart, Germany. He specializes in Django, Next.js, and building tech platforms driven by first-principles reasoning.",
  openGraph: {
    title: 'About | Vedant Mistry',
    description:
      "Vedant Mistry is a software engineer, startup founder, and passionate thinker based in Stuttgart, Germany. He specializes in Django, Next.js, and building tech platforms driven by first-principles reasoning.",
    url: 'https://vedantmistry.com/about',
    images: ['/static/images/about-bw.jpg']
  }
};

export default function About() {
  const description =
    "Vedant Mistry is an Indian software engineer, builder, and graduate student based in Stuttgart, Germany. Guided by metacognition, dialectical thinking, and Stoic philosophy, he focuses on full-stack web architectures.";

  return (
    <Base
      title="About | Vedant Mistry"
      tagline="Reason. Reason. Reason."
      primaryColor="pink"
      secondaryColor="purple"
    >
      <AboutClient description={description} />
    </Base>
  );
}