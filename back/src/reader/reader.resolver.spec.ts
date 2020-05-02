import { Test, TestingModule } from '@nestjs/testing';
import { ReaderResolver } from './reader.resolver';

describe('ReaderResolver', () => {
  let resolver: ReaderResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReaderResolver],
    }).compile();

    resolver = module.get<ReaderResolver>(ReaderResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
