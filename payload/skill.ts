import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'C',
      level: 2,
    },
    {
      title: 'C#',
      level: 2,
    },
    {
      title: 'Java',
      level: 1,
    },
    {
      title: 'JavaScript',
      level: 1,
    },
    {
      title: 'Python',
      level: 2,
    },
  ],
};

const kernelDevelopment: ISkill.Skill = {
  category: 'Kernel Development',
  items: [],
};

const virtualization: ISkill.Skill = {
  category: 'Virtualization',
  items: [
    {
      title: 'VMware ESXi',
      level: 1,
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Automation',
  items: [],
};

const networkSecurity: ISkill.Skill = {
  category: 'Network Security',
  items: [],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    kernelDevelopment,
    virtualization,
    automation,
    networkSecurity,
    misc,
  ],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
