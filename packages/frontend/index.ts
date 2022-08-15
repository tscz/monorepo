import inquirer from 'inquirer';
import { exit } from 'process';

try {
  await fetch("http://localhost:3000");
} catch (error) {
  throw new Error("Could not establish connection to server. Is it started?",{cause: error as Error})
}

while (true) {

await inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What do you want to do?',
      choices: [
        'Call the server',
        'Exit',
      ],

    },
  ])
  .then(async (answers) => {

    switch (answers.action) {
      case "Call the server":
        await main();
        break;
    case "Exit":
        exit();
      default:
        console.log(JSON.stringify(answers, null, '  '));
        break;
    }
  });

}



async function main(): Promise<void> {
  try {
    const response = await fetch("http://localhost:3000");
    const responseBody = await response.json();

    console.log(responseBody);
  } catch (error) {
    console.log("Unable to fetch -", error);
  }
}
