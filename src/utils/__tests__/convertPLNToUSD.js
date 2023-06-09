import { convertPLNToUSD } from './../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => {
    it('should return proper value when good input', () => {
        expect(convertPLNToUSD(1)).toBe('$0.29');
        expect(convertPLNToUSD(2)).toBe('$0.57');
        expect(convertPLNToUSD(20)).toBe('$5.71');
        expect(convertPLNToUSD(12)).toBe('$3.43');
    });
    it('should return NaN when input is text', () => {
        expect(convertPLNToUSD('-1')).toBeNaN();
        expect(convertPLNToUSD('-2')).toBeNaN();
        expect(convertPLNToUSD('qwe')).toBeNaN();
        expect(convertPLNToUSD('-12')).toBeNaN();
    });
    it('should return NaN when string is empty', () => {
        expect(convertPLNToUSD()).toBeNaN();
    });
    it('should return Error to argument that is not text or numer', () => {
        expect(convertPLNToUSD({})).toBe('Error');
        expect(convertPLNToUSD(function () { })).toBe('Error');
        expect(convertPLNToUSD([])).toBe('Error');
    });
    it('should return zero when numer is lower than zero', () => {
        expect(convertPLNToUSD(-1)).toBe('$0.00')
        expect(convertPLNToUSD(-2)).toBe('$0.00')
        expect(convertPLNToUSD(-16)).toBe('$0.00')
        expect(convertPLNToUSD(-234)).toBe('$0.00')
    });
});