import Base from '../../layouts/Base';
import AboutClient from './AboutClient';

export const metadata = {
  title: 'About',
  description:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  openGraph: {
    title: 'About // Vedant Mistry',
    description:
      "Vedant Mistry is a Brazilian creator and programmer. He currently lives in San Francisco, California, where he's the Founder & CEO at Resend.",
    url: 'https://vedantmistry.com/about',
    images: ['/static/images/about-bw.jpg']
  }
};

export default function About() {
  const description =
    "Vedant Mistry is an Indian thinker and a creator. He currently lives in Stuttgart, Germany, where he's a Graduate Student. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

  return (
    <Base
      title="About // Vedant Mistry"
      tagline="Reason. Reason. Reason."
      primaryColor="pink"
      secondaryColor="purple"
    >
      <AboutClient description={description} />
    </Base>
  );
}
