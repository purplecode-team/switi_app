export const TargetList = [
  { id: 0, name: '대학생', category: 'state' },
  { id: 1, name: '직장인', category: 'state' },
  { id: 2, name: '취준생', category: 'state' },
  { id: 3, name: '무관', category: 'state' },
];

export const InterestList = [
  { id: 0, name: '어학', category: 'interest' },
  { id: 1, name: 'IT', category: 'interest' },
  { id: 2, name: '취미', category: 'interest' },
  { id: 3, name: '자격증/시험', category: 'interest' },
  // { key: 0, category: 'all', name: '전체' },
  // { key: 1, category: 'job', name: '취업' },
  // { key: 2, category: 'language', name: '어학' },
  // { key: 3, category: 'exam', name: '자격증/시험' },
  // { key: 4, category: 'publicOfficer', name: '공무원' },
  // { key: 5, category: 'free', name: '자율/인증' },
  // { key: 6, category: 'IT', name: 'IT' },
  // { key: 7, category: 'hobby', name: '취미' },
  // { key: 8, category: 'etc', name: '기타' },
];

export const Area = [
  { id: 0, name: '서울', category: 'region' },
  { id: 1, name: '경기', category: 'region' },
  // { key: 1, name: '경기도' },
  // { key: 2, name: '강원도' },
  // { key: 3, name: '대전광역시' },
  // { key: 4, name: '세종특별자치시' },
  // { key: 5, name: '충청남도' },
  // { key: 6, name: '충청북도' },
  // { key: 7, name: '부산광역시' },
  // { key: 8, name: '경상남도' },
  // { key: 9, name: '경상북도' },
  // { key: 10, name: '대구광역시' },
  // { key: 11, name: '광주광역시' },
  // { key: 12, name: '전라남도' },
  // { key: 13, name: '전라북도' },
  // { key: 14, name: '제주특별자치도' },
];

export const CharacterList = [
  { key: 0, category: 'all', name: '어울리는 걸 좋아해요' },
  { key: 1, category: 'job', name: '내향적이에요' },
  { key: 2, category: 'language', name: '융통성이 있어요' },
  { key: 3, category: 'exam', name: '체계적이고 계획적인 사람이에요' },
  { key: 4, category: 'publicOfficer', name: '분위기 메이커에요' },
  { key: 5, category: 'free', name: '타고난 리더 기질이 있어요' },
  { key: 6, category: 'IT', name: '아이디어 뱅크예요' },
  { key: 7, category: 'hobby', name: '공과 사는 철저히 구분해요' },
  { key: 8, category: 'etc', name: '솔직하고 시원시원해요' },
  { key: 9, category: 'etc', name: '무엇이든 꼼꼼히 챙겨요' },
  { key: 10, category: 'etc', name: '시간을 잘 지켜요' },
];

export const StudyList = [
  {
    idx: 0,
    username: '작성자1',
    online_flag: 0,
    title: '파이썬 스터디 같이 하실 분',
    desc:
      '기상시간 체크는 기본, 동기 부여 등 같이 파이썬 스터디 하실 분들 모집합니다. 열심히 할 자신 있는 분만 지원해주세요.',
    category: 'IT',
    address: '서울',
    target: '무관',
    recruit_num: '5',
    detail_address: '신촌역 근처',
    period: '3개월',
    contact: '010-1233-2333',
    createAt: '2021-03-30',
    endDate: '2021-05-01',
    scrap: 10,
    flag: 1,
  },
  {
    idx: 1,
    username: '작성자2',
    online_flag: 0,
    title: '알고리즘 스터디 같이 하실 분',
    desc:
      '알고리즘 스터디 부원 모집합니다. 열심히 할 자신 있는 분만 지원해주세요.',
    category: 'IT',
    address: '경기도',
    target: '대학생',
    recruit_num: '4',
    detail_address: '일산 - 백마역 근처',
    period: '3개월',
    contact: '010-1233-3333',
    createAt: '2021-04-01',
    endDate: '2021-06-01',
    scrap: 8,
    flag: 1,
  },
  {
    idx: 2,
    username: '작성자3',
    online_flag: 1,
    title: '스터디 같이 하실 분',
    desc:
      '기상시간 일어나는 것부터 공부하는 시간, 동기부여까지 서로 도와줄 사람 모집합니다. 기상시간 일어나는 것부터 공부하는 시간, 동기부여까지 서로 도와줄 사람 모집합니다. 기상시간 일어나는 것부터 공부하는 시간, 동기부여까지 서로 도와줄 사람 모집합니다. 기상시간 일어나는 것부터 공부하는 시간, 동기부여까지 서로 도와줄 사람 모집합니다. 기상시간 일어나는 것부터 공부하는 시간, 동기부여까지 서로 도와줄 사람 모집합니다.',
    category: '어학',
    address: '서울',
    target: '무관',
    recruit_num: '5',
    detail_address: '신촌역 근처',
    period: '3개월',
    contact: '카톡아이디 - eljnelkjnr',
    createAt: '2021-04-02',
    endDate: '2021-06-01',
    scrap: 8,
    flag: 1,
  },
  {
    idx: 3,
    username: '작성자4',
    online_flag: 1,
    title: '정보처리기사 자격증 준비하시는 분',
    desc: '정보처리기사 자격증을 목표로 공부하실 분 모집합니다.',
    category: '자격증/시험',
    address: '경기도',
    target: '무관',
    recruit_num: '5',
    detail_address: '신촌역 근처',
    period: '3개월',
    contact: '카톡아이디 - elsdlfhjlaksdjl',
    createAt: '2021-04-03',
    endDate: '2021-06-03',
    scrap: 6,
    flag: 1,
  },
  {
    idx: 4,
    username: '작성자5',
    online_flag: 1,
    title: 'cpa 준비 같이 하실 분',
    desc:
      'cpa 목표로 공부하실 분 모집합니다. 최소 공부시간 8시간을 목표로 합니다.',
    category: '자격증/시험',
    address: '서울',
    target: '대학생',
    recruit_num: '5',
    detail_address: '신촌역 근처',
    period: '3개월',
    contact: '카톡아이디 - cpacpacpa',
    createAt: '2021-04-03',
    endDate: '2021-06-03',
    scrap: 7,
    flag: 0,
  },
  {
    idx: 5,
    username: '작성자6',
    online_flag: 1,
    title: 'hsk 6급 스터디 같이하실 분',
    desc:
      'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
    category: '자격증/시험',
    address: '서울',
    target: '취준생',
    recruit_num: '5',
    detail_address: '이대역 근처',
    period: '3개월',
    contact: '카톡아이디 - hskstudy',
    createAt: '2021-04-04',
    endDate: '2021-06-03',
    scrap: 7,
    flag: 1,
  },
  {
    idx: 6,
    username: '작성자6',
    online_flag: 1,
    title: 'hsk 6급 스터디 같이하실 분',
    desc:
      'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
    category: '자격증/시험',
    address: '서울',
    target: '취준생',
    recruit_num: '5',
    detail_address: '이대역 근처',
    period: '3개월',
    contact: '카톡아이디 - hskstudy',
    createAt: '2021-04-04',
    endDate: '2021-06-03',
    scrap: 7,
    flag: 1,
  },
  {
    idx: 7,
    username: '작성자6',
    online_flag: 1,
    title: 'hsk 6급 스터디 같이하실 분',
    desc:
      'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
    category: '자격증/시험',
    address: '서울',
    target: '취준생',
    recruit_num: '5',
    detail_address: '이대역 근처',
    period: '3개월',
    contact: '카톡아이디 - hskstudy',
    createAt: '2021-04-04',
    endDate: '2021-06-03',
    scrap: 7,
    flag: 1,
  },
  {
    idx: 8,
    username: '작성자6',
    online_flag: 1,
    title: 'hsk 6급 스터디 같이하실 분',
    desc:
      'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
    category: '자격증/시험',
    address: '서울',
    target: '취준생',
    recruit_num: '5',
    detail_address: '이대역 근처',
    period: '3개월',
    contact: '카톡아이디 - hskstudy',
    createAt: '2021-04-04',
    endDate: '2021-06-03',
    scrap: 7,
    flag: 1,
  },
  // {
  //   idx: 9,
  //   username: '작성자6',
  //   online_flag: 1,
  //   title: 'hsk 6급 스터디 같이하실 분',
  //   desc:
  //     'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
  //   category: '자격증/시험',
  //   address: '서울',
  //   target: '취준생',
  //   recruit_num: '5',
  //   detail_address: '이대역 근처',
  //   period: '3개월',
  //   contact: '카톡아이디 - hskstudy',
  //   createAt: '2021-04-04',
  //   endDate: '2021-06-03',
  //   scrap: 7,
  //   flag: 1,
  // },
  // {
  //   idx: 10,
  //   username: '작성자6',
  //   online_flag: 1,
  //   title: 'hsk 6급 스터디 같이하실 분',
  //   desc:
  //     'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
  //   category: '자격증/시험',
  //   address: '서울',
  //   target: '취준생',
  //   recruit_num: '5',
  //   detail_address: '이대역 근처',
  //   period: '3개월',
  //   contact: '카톡아이디 - hskstudy',
  //   createAt: '2021-04-04',
  //   endDate: '2021-06-03',
  //   scrap: 7,
  //   flag: 1,
  // },
  // {
  //   idx: 11,
  //   username: '작성자6',
  //   online_flag: 1,
  //   title: 'hsk 6급 스터디 같이하실 분',
  //   desc:
  //     'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
  //   category: '자격증/시험',
  //   address: '서울',
  //   target: '취준생',
  //   recruit_num: '5',
  //   detail_address: '이대역 근처',
  //   period: '3개월',
  //   contact: '카톡아이디 - hskstudy',
  //   createAt: '2021-04-04',
  //   endDate: '2021-06-03',
  //   scrap: 7,
  //   flag: 1,
  // },
  // {
  //   idx: 12,
  //   username: '작성자6',
  //   online_flag: 1,
  //   title: 'hsk 6급 스터디 같이하실 분',
  //   desc:
  //     'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
  //   category: '자격증/시험',
  //   address: '서울',
  //   target: '취준생',
  //   recruit_num: '5',
  //   detail_address: '이대역 근처',
  //   period: '3개월',
  //   contact: '카톡아이디 - hskstudy',
  //   createAt: '2021-04-04',
  //   endDate: '2021-06-03',
  //   scrap: 7,
  //   flag: 1,
  // },
  // {
  //   idx: 13,
  //   username: '작성자6',
  //   online_flag: 1,
  //   title: 'hsk 6급 스터디 같이하실 분',
  //   desc:
  //     'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
  //   category: '자격증/시험',
  //   address: '서울',
  //   target: '취준생',
  //   recruit_num: '5',
  //   detail_address: '이대역 근처',
  //   period: '3개월',
  //   contact: '카톡아이디 - hskstudy',
  //   createAt: '2021-04-04',
  //   endDate: '2021-06-03',
  //   scrap: 7,
  //   flag: 1,
  // },
  // {
  //   idx: 14,
  //   username: '작성자6',
  //   online_flag: 1,
  //   title: 'hsk 6급 스터디 같이하실 분',
  //   desc:
  //     'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
  //   category: '자격증/시험',
  //   address: '서울',
  //   target: '취준생',
  //   recruit_num: '5',
  //   detail_address: '이대역 근처',
  //   period: '3개월',
  //   contact: '카톡아이디 - hskstudy',
  //   createAt: '2021-04-04',
  //   endDate: '2021-06-03',
  //   scrap: 7,
  //   flag: 1,
  // },
  // {
  //   idx: 15,
  //   username: '작성자6',
  //   online_flag: 1,
  //   title: 'hsk 6급 스터디 같이하실 분',
  //   desc:
  //     'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
  //   category: '자격증/시험',
  //   address: '서울',
  //   target: '취준생',
  //   recruit_num: '5',
  //   detail_address: '이대역 근처',
  //   period: '3개월',
  //   contact: '카톡아이디 - hskstudy',
  //   createAt: '2021-04-04',
  //   endDate: '2021-06-03',
  //   scrap: 7,
  //   flag: 1,
  // },
  // {
  //   idx: 16,
  //   username: '작성자6',
  //   online_flag: 1,
  //   title: 'hsk 6급 스터디 같이하실 분',
  //   desc:
  //     'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
  //   category: '자격증/시험',
  //   address: '서울',
  //   target: '취준생',
  //   recruit_num: '5',
  //   detail_address: '이대역 근처',
  //   period: '3개월',
  //   contact: '카톡아이디 - hskstudy',
  //   createAt: '2021-04-04',
  //   endDate: '2021-06-03',
  //   scrap: 7,
  //   flag: 1,
  // },
  // {
  //   idx: 17,
  //   username: '작성자6',
  //   online_flag: 1,
  //   title: 'hsk 6급 스터디 같이하실 분',
  //   desc:
  //     'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
  //   category: '자격증/시험',
  //   address: '서울',
  //   target: '취준생',
  //   recruit_num: '5',
  //   detail_address: '이대역 근처',
  //   period: '3개월',
  //   contact: '카톡아이디 - hskstudy',
  //   createAt: '2021-04-04',
  //   endDate: '2021-06-03',
  //   scrap: 7,
  //   flag: 1,
  // },
  // {
  //   idx: 18,
  //   username: '작성자6',
  //   online_flag: 1,
  //   title: 'hsk 6급 스터디 같이하실 분',
  //   desc:
  //     'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
  //   category: '자격증/시험',
  //   address: '서울',
  //   target: '취준생',
  //   recruit_num: '5',
  //   detail_address: '이대역 근처',
  //   period: '3개월',
  //   contact: '카톡아이디 - hskstudy',
  //   createAt: '2021-04-04',
  //   endDate: '2021-06-03',
  //   scrap: 7,
  //   flag: 1,
  // },
  // {
  //   idx: 19,
  //   username: '작성자6',
  //   online_flag: 1,
  //   title: 'hsk 6급 스터디 같이하실 분',
  //   desc:
  //     'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
  //   category: '자격증/시험',
  //   address: '서울',
  //   target: '취준생',
  //   recruit_num: '5',
  //   detail_address: '이대역 근처',
  //   period: '3개월',
  //   contact: '카톡아이디 - hskstudy',
  //   createAt: '2021-04-04',
  //   endDate: '2021-06-03',
  //   scrap: 7,
  //   flag: 1,
  // },
  // {
  //   idx: 20,
  //   username: '작성자6',
  //   online_flag: 1,
  //   title: 'hsk 6급 스터디 같이하실 분',
  //   desc:
  //     'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
  //   category: '자격증/시험',
  //   address: '서울',
  //   target: '취준생',
  //   recruit_num: '5',
  //   detail_address: '이대역 근처',
  //   period: '3개월',
  //   contact: '카톡아이디 - hskstudy',
  //   createAt: '2021-04-04',
  //   endDate: '2021-06-03',
  //   scrap: 7,
  //   flag: 1,
  // },
  // {
  //   idx: 21,
  //   username: '작성자6',
  //   online_flag: 1,
  //   title: 'hsk 6급 스터디 같이하실 분',
  //   desc:
  //     'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
  //   category: '자격증/시험',
  //   address: '서울',
  //   target: '취준생',
  //   recruit_num: '5',
  //   detail_address: '이대역 근처',
  //   period: '3개월',
  //   contact: '카톡아이디 - hskstudy',
  //   createAt: '2021-04-04',
  //   endDate: '2021-06-03',
  //   scrap: 7,
  //   flag: 1,
  // },
  // {
  //   idx: 22,
  //   username: '작성자6',
  //   online_flag: 1,
  //   title: 'hsk 6급 스터디 같이하실 분',
  //   desc:
  //     'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
  //   category: '자격증/시험',
  //   address: '서울',
  //   target: '취준생',
  //   recruit_num: '5',
  //   detail_address: '이대역 근처',
  //   period: '3개월',
  //   contact: '카톡아이디 - hskstudy',
  //   createAt: '2021-04-04',
  //   endDate: '2021-06-03',
  //   scrap: 7,
  //   flag: 1,
  // },
  // {
  //   idx: 23,
  //   username: '작성자6',
  //   online_flag: 1,
  //   title: 'hsk 6급 스터디 같이하실 분',
  //   desc:
  //     'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
  //   category: '자격증/시험',
  //   address: '서울',
  //   target: '취준생',
  //   recruit_num: '5',
  //   detail_address: '이대역 근처',
  //   period: '3개월',
  //   contact: '카톡아이디 - hskstudy',
  //   createAt: '2021-04-04',
  //   endDate: '2021-06-03',
  //   scrap: 7,
  //   flag: 1,
  // },
  // {
  //   idx: 24,
  //   username: '작성자6',
  //   online_flag: 1,
  //   title: 'hsk 6급 스터디 같이하실 분',
  //   desc:
  //     'hsk 6급을 목표로 공부하실 분 모집합니다. 6급 목표이신 분만 지원해주세요.',
  //   category: '자격증/시험',
  //   address: '서울',
  //   target: '취준생',
  //   recruit_num: '5',
  //   detail_address: '이대역 근처',
  //   period: '3개월',
  //   contact: '카톡아이디 - hskstudy',
  //   createAt: '2021-04-04',
  //   endDate: '2021-06-03',
  //   scrap: 7,
  //   flag: 1,
  // },
];
