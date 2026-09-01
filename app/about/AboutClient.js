'use client';

import { format, intervalToDuration, parseISO } from 'date-fns';
import Image from 'next/image';
import React from 'react';

import { AnimatedIcon } from '../../components/AnimatedIcon';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import Toast from '../../components/Toast';
import items from '../../data/about';
import copyBioIcon from '../../public/static/icons/copy-bio.json';

export default function AboutClient({ description }) {
  const [toastTitle, setToastTitle] = React.useState('');
  const [toastDescription, setToastDescription] = React.useState('');
  const [showToast, setShowToast] = React.useState(false);
  const copyBioRef = React.useRef();

  const renderIntro = () => {
    return (
      <div className="flex flex-col justify-between md:flex-row">
        <div className="mt-0 w-auto md:w-84">
          <div className="mt-0 w-auto md:w-84">
            <Image
              alt="Vedant Mistry"
              src="/static/images/avatar.jpeg"
              width="336"
              height="336"
              style={{ width: 'auto', height: 'auto' }}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
              priority
            />
          </div>
        </div>
        <div className="mt-0 w-auto md:w-[48%]">
          <p className="mt-4 md:my-3.75 md:-mt-1.5">
            <strong>Hey, I&apos;m Vedant Mistry</strong> a software engineer, builder, and passionate thinker living in <strong>Stuttgart, Germany</strong>.
          </p>
          <p className="md:my-3.75">
            I approach engineering and life from <strong>first principles</strong>, guided by metacognition, dialectical thinking, and a Stoic mindset. I specialize in building full-stack systems with <strong>Django, Next.js, and PostgreSQL</strong>.
          </p>
          {/* <p className="md:my-3.75">
            Currently, I&apos;m pursuing my Master&apos;s in Applied Computer Science, learning German, and building a new social space at{' '}
            <a href="https://social.vedantmistry.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
              social.vedantmistry.com
            </a>.
          </p> */}
          <p className="md:my-3.75">
            <strong>I love discussing</strong> philosophy, physics, astronomy, history, human rights, and music. I&apos;m always open to meaningful collaboration with curious minds.
          </p>
        </div>
      </div>
    );
  };

  const renderBio = () => {
    return (
      <div>
        <p>
          This bio is for journalists, collaborators, and podcast hosts to copy-and-paste.
        </p>
        <blockquote>
          <p>{description}</p>
        </blockquote>
        <div className="flex items-center">
          <ButtonPrimary
            as="button"
            className="inline-flex items-center justify-center"
            onClick={copyBio}
            onMouseEnter={() => copyBioRef.current?.play()}
            onMouseLeave={() => copyBioRef.current?.stop()}
          >
            <AnimatedIcon
              lottieRef={copyBioRef}
              animationData={copyBioIcon}
              loop={false}
              autoplay={false}
              className="mr-2"
            />
            Copy Bio
          </ButtonPrimary>

        </div>
      </div>
    );
  };

  const renderAll = () => {
    return items.map((item) => {
      return (
        <div className="mb-10" key={`${item.companyUrl}-${item.startDate}`}>
          <h3>{item.jobTitle}</h3>
          <p className="m-0">
            <a href={item.companyUrl} target="_blank" rel="noopener noreferrer">
              {item.company}
            </a>
            <span> • {item.location}</span>
          </p>
          <p className="m-0">
            <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
            <span> – </span>
            <span>
              {item.endDate
                ? format(parseISO(item.endDate), 'LLL yyyy')
                : 'Present'}
            </span>
            <span> • </span>
            <span>{getDuration(item.startDate, item.endDate)}</span>
          </p>
        </div>
      );
    });
  };

  const getDuration = (startDate, endDate) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date()
    });

    let durationStr = '';

    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `;
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `;
    }

    const months = durationObj.months ?? 0;
    if (months > 0) {
      durationStr += `${months} mos`;
    }

    return durationStr.trim();
  }

  const copyBio = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(description);

    setToastTitle('Copied :D');
    setToastDescription('Bio copied to clipboard.');
    setShowToast(true);
  };

  return (
    <>
      {renderIntro()}
      <h2>Bio</h2>
      {renderBio()}
      <h2>Career</h2>
      {renderAll()}
      <Toast
        title={toastTitle}
        description={toastDescription}
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  );
}