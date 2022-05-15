import React, { useState } from 'react';
import Input from '@components/Input';
import strings from '@constants/strings';
import CheckBox from '@components/CheckBox';

// todo 서버 데이터로
const options = [
  {
    id: 1,
    label: '숙소에서 휴식',
    value: '숙소에서 휴식',
  },
  {
    id: 2,
    label: '맛집탐방',
    value: '맛집탐방',
  },
  {
    id: 3,
    label: '빽빽하게 여행지 돌아다니기',
    value: '빽빽하게 여행지 돌아다니기',
  },
  {
    id: 4,
    label: '가장 유명한 액티비티 즐기기',
    value: '가장 유명한 액티비티 즐기기',
  },
  {
    id: 5,
    label: '풍경 보러 나가기',
    value: '풍경 보러 나가기',
  },
  {
    id: 6,
    label: '여행지에서 사람 만나기',
    value: '여행지에서 사람 만나기',
  },
  {
    id: 7,
    label: '쇼핑하기',
    value: '쇼핑하기',
  },
];

interface AddiInfosProps {}

function AddiInfos({}: AddiInfosProps) {
  const [values, setValues] = useState<string[]>([]);
  const [radio, setRadio] = useState('');

  return (
    <div>
      {/*<h2 className='mb-24 whitespace-pre-wrap text-h2'>{strings.AddiInfo_Title_1}</h2>*/}
      {/*<Input full onChange={() => {}} value={''} placeholder={strings.NickName} />*/}

      {/*<h2 className='mb-24 whitespace-pre-wrap text-h2'>{strings.AddiInfo_Title_2}</h2>*/}
      {/*<div className='space-y-16'>*/}
      {/*  <Input numberLabel={1} full onChange={() => {}} value={''} placeholder={strings.NickName} />*/}
      {/*  <Input numberLabel={2} full onChange={() => {}} value={''} placeholder={strings.NickName} />*/}
      {/*  <Input numberLabel={3} full onChange={() => {}} value={''} placeholder={strings.NickName} />*/}
      {/*</div>*/}

      <h2 className='mb-24 whitespace-pre-wrap text-h2'>{strings.AddiInfo_Title_3}</h2>
      <div className='space-y-16'>
        <CheckBox options={options} values={values} setValues={setValues} />
      </div>

      {/*<h2 className='mb-24 whitespace-pre-wrap text-h2'>{strings.AddiInfo_Title_4}</h2>*/}
    </div>
  );
}

export default AddiInfos;
