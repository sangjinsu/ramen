FROM golang:1.17-alpine

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY ./ ./

RUN go build -o /ramen-search-server

EXPOSE 8082

CMD [ "/ramen-search-server" ]