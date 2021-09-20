import { useCountdown } from 'Utils/TimingUtils/useCountdown';

export default function Countdown({ actionItem }) {
	return useCountdown(actionItem.endingTime);
}
