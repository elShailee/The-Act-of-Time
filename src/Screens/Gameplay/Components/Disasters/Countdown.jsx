import disastersData from 'ExampleData/disastersExampleData';
import { useCountdown } from 'Utils/TimingUtils/useCountdown';

export default function Countdown() {
	return useCountdown(disastersData.triggerTime);
}
