const { MissingParamError } = require("../../utils/errors");

class AuthUseCase {
  constructor(loadUserByEmailRepository) {
    this.loadUserByEmailRepository = loadUserByEmailRepository;
  }

  async auth(email, password) {
    if (!email) {
      throw new MissingParamError("email");
    }

    if (!password) {
      throw new MissingParamError("password");
    }

    await this.loadUserByEmailRepository.load(email);
  }
}

const makeSut = () => {
  class LoadUserByEmailRepositorySpy {
    async load(email) {
      this.email = email;
    }
  }

  const loadUserByEmailRepository = new LoadUserByEmailRepositorySpy();
  const sut = new AuthUseCase(loadUserByEmailRepository);

  return { sut, loadUserByEmailRepository };
};

describe("Auth UseCase", () => {
  test("Should throw if no email is provided", async () => {
    const { sut } = makeSut();
    const promise = sut.auth();

    expect(promise).rejects.toThrow(new MissingParamError("email"));
  });

  test("Should throw if no password is provided", async () => {
    const { sut } = makeSut();
    const promise = sut.auth("any_email@mail.com");

    expect(promise).rejects.toThrow(new MissingParamError("password"));
  });

  test("Should call loadUserByEmailRepository with correct email", async () => {
    const { sut, loadUserByEmailRepository } = makeSut();

    await sut.auth("any_email@mail.com", "any_password");

    expect(loadUserByEmailRepository.email).toBe("any_email@mail.com");
  });
});
