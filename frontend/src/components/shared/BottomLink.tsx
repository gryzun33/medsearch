import { Link } from 'react-router';

type Props = {
  text: string;
  linkText: string;
  linkTo: string;
};

const BottomLink = ({ text, linkText, linkTo }: Props) => {
  return (
    <p className="mt-4 text-center text-sm text-gray-600">
      {text}{' '}
      <Link to={linkTo} className="text-green-600 hover:underline">
        {linkText}
      </Link>
    </p>
  );
};

export default BottomLink;
