import { BsXDiamondFill } from 'react-icons/bs';
import { FaGithub, FaVrCardboard, FaRegPaperPlane } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { IoLanguageOutline } from 'react-icons/io5';
import { TbCertificate } from 'react-icons/tb';

const Icon = ({ id = 'diamond', color = 'purple' }) => {
  const icons = {
    diamond: <BsXDiamondFill className={`icon icon-${color}`} />,
    github: <FaGithub className={`icon icon-${color}`} />,
    linkedin: <AiFillLinkedin className={`icon icon-${color}`} />,
    cardboard: <FaVrCardboard className={`icon icon-${color}`} />,
    paperPlane: <FaRegPaperPlane className={`icon icon-${color}`} />,
    language: <IoLanguageOutline className={`icon icon-${color}`} />,
    certification: <TbCertificate className={`icon icon-${color}`} />,
  };
  return icons[id];
};

export { Icon };
