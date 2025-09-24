import PreLoader from '@/components/Loader';
import { quote } from '@/utils/get-random-quote';

export default function Loading() {
  return <PreLoader quote={quote} />;
}
