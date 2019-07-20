export class Datetime {

    getCurrentDateTime(dateSeparateSymbol: string = '-') {
        const dateTime = new Date();
        let dateDay: string = this.formatWithTwoDigits(String(dateTime.getDate()));
        let month: string = this.formatWithTwoDigits(String(dateTime.getMonth() + 1));

        let hour : string = this.formatWithTwoDigits(String(dateTime.getHours()));
        let minutes : string = this.formatWithTwoDigits(String(dateTime.getMinutes()));
        let seconds : string = this.formatWithTwoDigits(String(dateTime.getSeconds()));

        return `${dateTime.getFullYear()}${dateSeparateSymbol}${month}${dateSeparateSymbol}${dateDay} ${hour}:${minutes}:${seconds}`;
    }

    private formatWithTwoDigits(value: number | string) {
        if (+value < 10) {
            return `0${value}`;
        }
        return String(value);
    }

    /**
     * Add specific days count to select date or now date
     * @param days add days in select date
     * @param customDate Specify date if use select date
     */
    addDays(days: number, date: string, customDate: string = '', ) {
        let date_ = new Date(date);
        if (customDate !== '') {
            date_ = new Date(customDate);
        }
        date_.setDate(date_.getDate() + days);
        return date;
    }


}