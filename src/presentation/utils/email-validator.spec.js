const validator = require("validator");

class EmailValidator {
  isValid(email) {
    return validator.isEmail(email);
  }
}

const makeSut = () => {
  return new EmailValidator();
};

describe("Email Validator", () => {
  test("should return true if validator returns true", () => {
    const sut = makeSut();
    const isEmailValid = sut.isValid("valid_email@mail.com");

    expect(isEmailValid).toBe(true);
  });

  test("should return false if validator returns false", () => {
    validator.isEmailValid = false;

    const sut = makeSut();
    const isEmailInvalid = sut.isValid("invalid_email");

    expect(isEmailInvalid).toBe(false);
  });
});

// Testando o email com validator como exemplo aprendi que: Precisamos mockar porque queremos garantir
// que vai funcionar o que nós passarmos de fato, caso não fizesse isso, é como se simplesmente
// nós estivesse testando apenas o validator, e isso nao faz tanto sentido, porque se estamos no ponto
// que decidimos usar essa lib é porque no minimo ela funciona corretamente, certo?
// Então testamos independente dela... porque até se mudar de lib, como mockamos, não quebra os testes
// Obs: Se nós tivermos uma pasta chamada __mocks__ e o arquivo em js for o mesmo nome da lib
// que queremos testar, mesmo se importamos apenas ('nome da lib') e nao o caminho do mock, o jest ainda sim
// entende e vai chamar o mock, e nao a lib de fato.
