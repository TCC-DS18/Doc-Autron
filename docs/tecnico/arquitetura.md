---
sidebar_position: 1
title: Arquitetura
---

# Arquitetura

A arquitetura do Autron é modular: o front-end concentra a experiência do usuário, o back-end Spring Boot organiza regras de negócio e persistência, e os microsserviços Python executam tarefas de IA, embeddings e reconhecimento facial.

## Camadas

| Camada | Responsabilidade |
| --- | --- |
| Front-end React + Vite | Captura interações, renderiza telas e consome APIs por HTTP. |
| Back-end Spring Boot | Expõe controllers REST, aplica regras de negócio, usa DTOs/mappers e integra serviços. |
| PostgreSQL + JPA | Persiste dados relacionais como usuários, turmas, aulas, quizzes e metadados. |
| Azure Blob Storage | Armazena arquivos não estruturados, como PDFs, imagens e mídias. |
| FastAPI IA | Processa áudio/texto, RAG, embeddings, TTS e integrações cognitivas. |
| pgvector | Armazena e consulta vetores para busca semântica e reconhecimento. |

## Fluxo geral

1. O usuário interage com a interface React.
2. A requisição chega ao controller do Spring Boot.
3. O service aplica regra de negócio e persiste dados comuns via JPA.
4. Arquivos seguem para Azure Blob Storage.
5. Demandas de IA, biometria ou vetorização seguem para microsserviços FastAPI.
6. O resultado volta ao Spring Boot, é formatado como DTO e retorna ao front-end em JSON.
