describe('entry endpoints', () => {
    let api;
    beforeEach(async () => {
        await resetTestDB()
    });

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(done => {
        console.log('Gracefully stopping test server')
        api.close(done)
    })

    it('should return a list of all entries in database', async () => {
        const res = await request(api).get('/entries');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(33);
    }) 

    it('should return a list of all entries in database that match the id ', async () => {
        const res = await request(api).get('/entries/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(31);
        expect(res.body.id).toEqual('1')
    }) 
})