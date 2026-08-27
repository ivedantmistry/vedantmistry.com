import { Box } from '../../components/Box';
import Base from '../../layouts/Base';

export const metadata = {
  title: 'Reminder',
  description:
    'Time is the most important asset. Time does not equal money. Time equals life. And you only have one chance to make it right.',
  openGraph: {
    title: 'Reminder | Vedant Mistry',
    url: 'https://vedantmistry.com/reminder',
    images: ['/static/images/reminder-bw.jpg']
  }
};

export default function Reminder() {
  return (
    <Base
      title="Reminder | Vedant Mistry"
      tagline="We are the universe experiencing itself "
      primaryColor="cyan"
      secondaryColor="green"
    >
      <Box className="text-justify">
        <p>
          <strong>Resilience.</strong> The urge to fight against all the odds.
          That&apos;s what it takes to <strong>survive the winter</strong> when it
          comes.
        </p>
        <p>
          <strong>Actions.</strong> When the long winter comes, you cannot control
          it. But with resilience at your side, realizing the{' '}
          <strong>only thing in your control</strong> is what you can do.
        </p>
        <p>
          <strong>Humble.</strong> With your actions be humble with others.
          Everyone is fighting a battle; <strong>being humble won&apos;t hurt you</strong>{' '}
          but definitely makes someone&apos;s day.
        </p>

        <p>
          <strong>Help.</strong> Not everyone is privileged, and that&apos;s not
          their mistake. Be humble and <strong>help those who need it selflessly</strong>,
          with no interest in reciprocity.
        </p>
        <p>
          <strong>Privilege.</strong> The ability to question is a very underrated
          privilege that we ignore, continuing on our assumptions.{' '}
          <strong>No one in the known universe except us can question.</strong>
        </p>
        <p>
          By being resilient, taking continuous actions, and being humble and
          helpful to others, we can <strong>ignite a chain reaction</strong> where
          every single human will contribute to answering the{' '}
          <strong>ultimate questions of life and the universe</strong>.
        </p>
        <p>
          <em>- Vedant</em>
        </p>
      </Box>
    </Base>
  );
}
