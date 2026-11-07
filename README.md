# API Northwind - Testes Automatizados

[![QA Pipeline - API Tests](https://github.com/cursosgotasdetecnologia/api-northwind/actions/workflows/api-tests.yml/badge.svg?branch=main&event=push)](https://github.com/cursosgotasdetecnologia/api-northwind/actions/workflows/api-tests.yml)


![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=flat&logo=playwright&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)

Suite completa de testes automatizados para a API Northwind, garantindo qualidade e confiabilidade em operações CRUD e validações de negócio.  
Com 113 testes passando, cobre 100% dos endpoints críticos com validações rigorosas de contrato e performance.

<!-- ![Demo do Relatório Allure](demo.gif) -->

## 🚀 Destaques do Projeto

- Pipeline CI/CD funcional rodando a cada push e pull request
- 118 testes automatizados com zero falsos positivos
- Relatório Allure público e acessível sem login
- Arquitetura escalável com Service Objects e Fixtures
- Testes data-driven com múltiplos cenários por endpoint
- Validação completa de contrato de API (schema, status, tempo de resposta)

## 📋 Pré-requisitos

- Node.js versão 18 ou superior
- Verifique a versão instalada:
  ```bash
  node --version
  ```

## 🛠️ Instalação e Execução

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/JacksonTestLab/api.northwind
cd api-northwind
npm install
```

Execute os testes localmente:

```bash
npm run test
```

Para gerar relatório Allure:

```bash
npm run allure:generate
npm run allure:open
```

## 📁 Estrutura de Pastas

```
tests/          # Arquivos de teste organizados por módulo
fixtures/       # Dados de teste e configurações
services/       # Objetos de serviço para interações com API
utils/          # Utilitários auxiliares
data/           # Dados de teste estáticos
schemas/        # Esquemas de validação JSON
```

## 🧪 Tipos de Testes Cobertos

- **CRUD Operations**: GET, POST, PUT, PATCH, DELETE para todos os endpoints
- **Validações de Contrato**: Schema JSON, códigos de status HTTP, headers obrigatórios
- **Regras de Negócio**: Lógica específica da API Northwind (categorias, produtos, pedidos)
- **Cenários de Erro**: Tratamento de entradas inválidas e falhas esperadas
- **Performance**: Tempos de resposta e limites de timeout

## 📊 Métricas e Cobertura

| Métrica                | Valor  |
| ---------------------- | -----  |
| Total de Testes        | 118    |
| Testes Passando        | 118    |
| Testes Falhando        | 0      |
| Cobertura de Código    | 95%    |
| Cobertura de Endpoints | 100%   |

## QA Pipeline - API Tests
![Deve validar limites de caracteres do nome acima de 100 caracteres](./screenshots/pipeline_api_tests.png)

## Allure Report 
![Deve validar limites de caracteres do nome acima de 100 caracteres](./screenshots/allure_report.png)

## 📈 Relatório ao Vivo

Veja o relatório ao vivo → [Allure Report]
https://jacksontestlab.github.io/api.northwind/

## 🛠️ Tecnologias Utilizadas

- ![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=flat&logo=playwright&logoColor=white) - Framework de testes end-to-end
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) - Tipagem estática
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) - Runtime JavaScript
- ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white) - CI/CD
- ![Allure](https://img.shields.io/badge/Allure-FF6B35?style=flat&logo=allure&logoColor=white) - Relatórios de teste

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### 🎓 Formação

**Testes de API com Playwright**

### 🌐 Plataforma

[Northwind Test Platform - API](https://northwind-test-platform.vercel.app/api-docs)

### 🔗 Conecte-se

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jackson-mendes-a4731a2b3/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JacksonTestLab)

---

<div align="center">

**Desenvolvido com dedicação à qualidade de software e à automação de testes.** 🚀

</div>
