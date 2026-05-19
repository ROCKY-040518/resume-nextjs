import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/15-3.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '손광호',
    small: '(2004/05/18)',
  },
  contact: [
    {
      title: 'rocky0518@daum.net',
      link: 'mailto:rocky0518@daum.net',
      icon: faEnvelope,
    },
    {
      title: '010-2899-0518',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/ROCKY-040518/resume-nextjs',
      icon: faGithub,
    },
    {
      link: 'none',
      icon: faFacebook,
    },
  ],
  notice: {
    title:
      "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;
