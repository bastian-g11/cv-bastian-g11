import { BsXDiamondFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Icon = ({ id = 'diamond', color = 'purple' }) => {
  const icons = {
    diamond: <BsXDiamondFill className={`icon icon-${color}`} />,
    github: <FaGithub className={`icon icon-${color}`} />,
  };
  return icons[id];
};

export { Icon };
