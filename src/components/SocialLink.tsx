import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type Props = {
  link: string;
  icon: IconDefinition;
};

const SocialLink = ({ link, icon }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-green-500 transition-colors"
    >
      <FontAwesomeIcon icon={icon} size="xl" />
    </a>
  );
};

export default SocialLink;
