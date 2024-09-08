// 별도로 라이브러리를 받아 사용하는것 또한 가능하다. 이때에는 원하는 경로로가서 yarn add를 해주면 됨.
// 이때, 그 라이브러리는 test2에서만 유효!
import { FaAccusoft } from 'react-icons/fa';

export default function App() {
	return (
		<div>
			HI
			<FaAccusoft size={30} />
		</div>
	);
}
