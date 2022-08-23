import path from 'path';

export default ({ env }) => ({
  connection: {
    client: 'sqlite',
    useNullAsDefault: true,
    connection: {
      filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db'))
    }
  }
});
