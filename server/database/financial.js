const db = require('./db');

const ASSET = 'ASSET';
const LIABILITY = 'LIABILITY';

module.exports = {
    async getAllEntries() {
        const entries = await db.query('SELECT * FROM finance_entry');
        //Please excuse this.
        return entries.map(({entryamount, entryname, entrytype, id})=>({
            entryAmount: entryamount,
            entryName: entryname,
            entryType: entrytype,
            id
        }));
    },
    async createEntry({
        entryName,
        entryAmount,
        entryType
    }) {
        await db.query(
            'INSERT INTO finance_entry (entryName, entryAmount, entryType) VALUES ($1, $2, $3)',
            [entryName, entryAmount, entryType]
        );
    },
    async removeEntry(id) {
        await db.query('DELETE FROM finance_entry WHERE id = $1', [id]);
    },
    async getFinanicalReport() {
        const entries = await this.getAllEntries();

        return {
            entries,
            total: this.calculateTotals(entries)
        };
    },
    calculateTotals(entries) {
        const total = {
            networth: 0,
            liabilities: 0,
            assets: 0
        };
        if(!entries)
            return total;

        entries.forEach(({
            entryType,
            entryAmount
        }) => {
            switch (entryType) {
                case ASSET:
                    total.assets += entryAmount;
                    total.networth += entryAmount;
                    break;
                case LIABILITY:
                    total.liabilities += entryAmount;
                    total.networth -= entryAmount;
                    break;
                default:
                    throw new Error('Invalid Entry');
            }
        });
        
        return {
            networth: total.networth.toFixed(2),
            assets: total.assets.toFixed(2),
            liabilities: total.liabilities.toFixed(2)
        };
    }
};