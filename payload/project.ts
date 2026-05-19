import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '음성파일 요약 API 연동 사이트 프로젝트',
      startedAt: '2026-03',
      where: 'Team PSLW',
      descriptions: [
        {
          content:
            'AutoGPT API, Gemini API를 사용해 회의 음성 파일을 요약하는 사이트를 만들고 있습니다..',
        },
        {
          content:
            '다른 API를 사용하는 것이 아닌 각자가 가진 API를 사용할 수 있는 방법을 알았습니다.',
        },
      ],
    },
    {
      title: '욕설 필터링 AI 프로젝트',
      startedAt: '2025-03',
      endedAt: '2025-12',
      where: 'Team PSLW',
      descriptions: [
        {
          content:
            '욕설을 자동으로 감지해 필터링하는 AI를 개발하고 그 Ai가 적용된 테스트 사이트를 제작했습니다.',
        },
        {
          content: 'AI를 사용한 첫 프로젝트를 성공적으로 마쳤습니다.',
        },
      ],
    },
  ],
};

export default project;
