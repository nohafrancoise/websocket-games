import { Server } from "socket.io";

const wordAndFuriousPlayers = []

function main() {
    const io = new Server({
        cors: {
            origin: "*"
        }
    });
    
    io.on("connection", (socket) => {
        console.log("new connection", socket.id)

        socket.on('game::join', (payload) => {
            wordAndFuriousPlayers.push(socket)

            if (wordAndFuriousPlayers.length >= 3) {
                wordAndFuriousPlayers.forEach((s) => {
                    s.emit('game::start')
                })
            }
        })
    });
    
    io.listen(3000);
    console.log("Server started at ws://localhost:3000");
}

main()
