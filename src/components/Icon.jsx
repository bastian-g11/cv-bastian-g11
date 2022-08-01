import { BsXDiamondFill, BsListCheck } from 'react-icons/bs';
import { FaGithub, FaVrCardboard, FaPaperPlane } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { IoLanguageOutline } from 'react-icons/io5';
import { TbCertificate } from 'react-icons/tb';
import { GiBearHead } from 'react-icons/gi';

const IconFactory = {
  diamond: ({ color, ...restProps }) => (
    <BsXDiamondFill {...restProps} className={`icon icon-${color}`} />
  ),
  github: ({ color, ...restProps }) => (
    <FaGithub {...restProps} className={`icon icon-${color}`} />
  ),
  linkedin: ({ color, ...restProps }) => (
    <AiFillLinkedin {...restProps} className={`icon icon-${color}`} />
  ),
  cardboard: ({ color, ...restProps }) => (
    <FaVrCardboard {...restProps} className={`icon icon-${color}`} />
  ),
  paperPlane: ({ color, ...restProps }) => (
    <FaPaperPlane {...restProps} className={`icon icon-${color}`} />
  ),
  language: ({ color, ...restProps }) => (
    <IoLanguageOutline {...restProps} className={`icon icon-${color}`} />
  ),
  certification: ({ color, ...restProps }) => (
    <TbCertificate {...restProps} className={`icon icon-${color}`} />
  ),
  todo: ({ color, ...restProps }) => (
    <BsListCheck {...restProps} className={`icon icon-${color}`} />
  ),
  bear: ({ color, ...restProps }) => (
    <GiBearHead {...restProps} className={`icon icon-${color}`} />
  ),
};

// Icon is the abstract factory
const Icon = ({ id = 'diamond', props = { color: 'purple' } }) =>
  IconFactory[id](props);

export { Icon };
