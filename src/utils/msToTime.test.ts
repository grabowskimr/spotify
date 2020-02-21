import { msToTime } from './msToTime';

describe('msToTime', () => {
	it('should format ms to time', () => {
		const ms = 123456;

		expect(msToTime(ms)).toBe('02:03');
	});
});
