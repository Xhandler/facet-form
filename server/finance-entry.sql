CREATE TABLE finance_entry (
   id SERIAL PRIMARY KEY,
   entryName VARCHAR(255) NOT NULL,
   entryAmount INTEGER NOT NULL CHECK (entryAmount <= 0),
   entryType VARCHAR(16) CHECK (entryType in ('ASSET', 'LIABILITY')),
   created timestamp NOT NULL DEFAULT NOW()
);