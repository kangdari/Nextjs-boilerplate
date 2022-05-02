import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'store';

// useSelector의 기본 상태 타입 설정
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
