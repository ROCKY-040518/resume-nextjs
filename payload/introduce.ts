import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '견문이 점점 넓어지는 개발자 지망생 손광호입니다.',
    '인공지능과 백엔드 개발에 관심을 가지고 있으며, 다양한 개인/팀 프로젝트를 통해 실전 역량과 협업 경험을 쌓아왔습니다.',
    '특히 백엔드 구축과 API 연결 및 수정 경험을 통해 백엔드 구조의 이해와 문제 해결력을 키웠습니다.',
  ],
  sign: 'Son GwangHo',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
