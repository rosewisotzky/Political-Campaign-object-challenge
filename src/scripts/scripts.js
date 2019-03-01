const campaign = {
    district: "Tennessee's 5th Congressional District",
    statements: {
        taxes: "libraries are cool",
        jobs: "ugh, capitalism",
        infrastructure: "it's a thing",
        healthcare: "should be free baby",
        crime: "happens, dude"
    },
    donationURL: "www.donations.com",
    calendar: ["Monday", "Tuesday", "Wednesday"],
    volunteerInfo: [],
    biography: "born and raised",
    imageGallery: [],
    missionStatement: "vote for me, ya doinks",
    votingURL: "www.voteformedummy.com"
}

const volunteerOne = {
    name: "Hulk Hogan",
    address: "33333 Regggggggal Boulevard",
    email: "astheworldturns@hotmail.com",
    phone: "1-800-BROTHER",
    availability: ["Monday", "Saturday"],
    activities: ["Answer calls", "Knock on doors"]
}

campaign.volunteerInfo.push(volunteerOne)
console.log(campaign.volunteerInfo)
