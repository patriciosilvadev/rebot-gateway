const axios = require('axios')
const venom = require('venom-bot')

venom
    .create()
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });

function start(client) {
    client.onMessage
        ((message) => {

            let data = message.content
            let contactId = message.from
            let contact = contactId.replace('@c.us', '')

            console.log(message.content)

            axios.post('http://web.rsalisibrohmalisi.com/api/ag', {

                data: {
                    from: contact,
                    message: {
                        type: "chat",
                        pesan: data,
                        timestamp: message.t,
                    },

                }
            })
                .then((response) => {
                    var res = response.data

                    console.log(res)
                    if (res != false) {

                        if (Array.isArray(res)) {
                            client.sendText(contactId, res[0])
                            client.sendText(contactId, res[1])
                            client.sendText(contactId, res[2])
                            client.sendText(contactId, res[3])
                        } else {

                            client.reply(message.from, res)
                        }
                    }


                }).catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                })






        })

}

// type: "chat",
// data: {
//     from: contact,
    // from_id: "-",
    // message: {
    //     type: "chat",
    //     pesan: data,
    //     timestamp: message.t,
        // location: false,
        // mentionedIds: false
    // },
    // contact: {
    //     business: message.isBusiness,
    //     name: message.name,
    //     myContact: message.isMyContact,
    // },
    // group: {
    //     id: "",
    //     name: "Botgrup",
    //     creation: 1585109220,
    //     owner: {
    //         id: "6281XXXXXXXXX@c.us",
    //         user: "6281XXXXXXX"
    //     },
    //     readOnly: false,
    //     unreadCount: 683,
    //     timeStamp: 1585639962,
    //     archived: false,
    //     description: "Deskripsi Group",
    //     pendingParticipants: false,
    //     participants: [
    //         {
    //             id: "62XXX@c.us",
    //             user: "62XXXXXXX",
    //             isAdmin: false
    //         },
    //         {
    //             id: "6281322207701@c.us",
    //             user: "6281322207701",
    //             isAdmin: true
    //         }
    //     ]
    // },
    // media: false,
    // quotedMsg: false
// }