function formFiller(userName, email, phoneNumber, text) {
        let pattern1 = /<![A-Za-z]+!>/g
        let pattern2 = /<@[A-Za-z]+@>/g
        let pattern3 = /<+[A-Za-z]+\+>/g
    text.forEach(line => {line = line.replace(pattern1, userName)
                         line = line.replace(/<@[A-Za-z]+@>/g,email)
                         line = line.replace(/<\+[A-Za-z]+\+>/g,phoneNumber)
        console.log(line);
    }
)

}
formFiller('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
)