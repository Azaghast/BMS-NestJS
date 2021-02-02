import { Test, TestingModule } from '@nestjs/testing';
import { TheatreResolver } from './theatre.resolver';

describe('TheatreResolver', () => {
  let resolver: TheatreResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TheatreResolver],
    }).compile();

    resolver = module.get<TheatreResolver>(TheatreResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
