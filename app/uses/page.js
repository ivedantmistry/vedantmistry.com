import categories from '../../data/uses';
import Base from '../../layouts/Base';

export const metadata = {
  title: 'Uses',
  description:
    "Here is the list of products I have used and recommend buying it, When you buy using my affiliate links, I get a commission from it, and that supports my journey.",
  openGraph: {
    title: 'Uses | Vedant Mistry',
    url: 'https://vedantmistry.com/uses',
    images: ['/static/images/uses-bw.jpg']
  }
};

export default function Uses() {
  const renderAll = () => {
    return categories.map((category) => {
      return (
        <div key={category.name}>
          <h2>{category.name}</h2>
          <ul>
            {category.items.map((item, index) => {
              return (
                <li key={`${category.name}-${item.title}-${index}`}>
                  <a href={item.url} target="_blank">
                    {item.title}
                  </a>
                  <span> - </span>
                  <span
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  };

  return (
    <Base
      title="Uses | Vedant "
      tagline="Tools. Apps. Gear."
      primaryColor="yellow"
      secondaryColor="pink"
    >
      <p
        dangerouslySetInnerHTML={{
          __html:
            "Here is the list of products I have used and recommend it, When you buy using my affiliate links, I get a commission from it which helps supporting my journey."
        }}
      />

      {renderAll()}
    </Base>
  );
}
