const trackingsController = require('../../../controllers/tracks')
const Tracking = require('../../../models/track');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('trackings controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('index', () => {
        test('it returns users with a 200 status code', async () => {
            let testTracking = ['d1', 'd2']
            jest.spyOn(Tracking, 'all', 'get')
                 .mockResolvedValue(testTracking);
            await trackingsController.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(testTracking);
        })
    });

    // describe('show', () => {
    //     test('it returns a dog with a 200 status code', async () => {
    //         let testDog = {
    //             id: 1, name: 'Test Dog', age: 2
    //         }
    //         jest.spyOn(Dog, 'findById')
    //             .mockResolvedValue(new Dog(testDog));
                
    //         const mockReq = { params: { id: 1 } }
    //         await dogsController.show(mockReq, mockRes);
    //         expect(mockStatus).toHaveBeenCalledWith(200);
    //         expect(mockJson).toHaveBeenCalledWith(new Dog(testDog));
    //     })
    // });

    // describe('create', () => {
    //     test('it returns a new dog with a 201 status code', async () => {
    //         let testDog = {
    //             id: 1, name: 'Test Dog', age: 2
    //         }
    //         jest.spyOn(Dog, 'create')
    //             .mockResolvedValue(new Dog(testDog));
                
    //         const mockReq = { body: testDog }
    //         await dogsController.create(mockReq, mockRes);
    //         expect(mockStatus).toHaveBeenCalledWith(201);
    //         expect(mockJson).toHaveBeenCalledWith(new Dog(testDog));
    //     })
    // });

    // describe('destroy', () => {
    //     test('it returns a 204 status code on successful deletion', async () => {
    //         jest.spyOn(Dog.prototype, 'destroy')
    //             .mockResolvedValue('Deleted');
            
    //         const mockReq = { params: { id: 1 } }
    //         await dogsController.destroy(mockReq, mockRes);
    //         expect(mockStatus).toHaveBeenCalledWith(204);
    //     })
    // });
    
})