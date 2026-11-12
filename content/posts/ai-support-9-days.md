---
title: "Shipping an AI support bot in 9 days without burning retraining budget"
excerpt: "Using retrieval-augmented generation over a client's existing FAQ + tickets to launch a model that answers 70% of questions on day one."
tag: "AI"
date: "Oct 22, 2026"
read: "11 min read"
cover: "/images/blog/ai.jpg"
---

The brief was scary: "Our support team is drowning in DMs during Black Friday.
We need a chatbot that actually knows our policies — in 9 days."

## What we didn't do

We didn't fine-tune a model on years of tickets. We didn't build a vector DB
from scratch. We didn't ask support to rewrite all their macros.

## What we did

1. Pulled 18 months of resolved tickets and existing help-center articles.
2. Chunked them into 400-token pieces, embedded with `text-embedding-3-small`.
3. On each incoming message we retrieve the top 4 chunks, stuff them into a
   short prompt, and let GPT-4o-mini write the answer.
4. Every answer is streamed back with citations; a human agent can take over
   with one click.

## Outcome

On day 9 the bot answered **70%** of inbound questions without escalation.
Average first-response time fell from 11 minutes to **9 seconds**.
