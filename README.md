# AstroMVP Boilerplate

Our standard boilerplate for client projects. Uses our preferred stack and tooling to help us ship faster.

## Prerequisites

- Containerization
  - [OrbStack](https://orbstack.dev/) **(Recommended)**
  - [Docker](https://www.docker.com)
  - [Colima](https://github.com/abiosoft/colima)
- [NodeJS](https://nodejs.org/en)
  - [nvm](https://github.com/nvm-sh/nvm) - Node Version Manager
- [pnpm](https://pnpm.io)
- [Supabase CLI](https://supabase.io/docs/guides/cli)

## Get Started

### Install required tools

#### Containerization

Download and install [OrbStack](https://orbstack.dev/) or any other containerization tool of your choice.

You can also install OrbStack using Homebrew:

```bash
brew install orbstack
```

#### NodeJS

##### Install Node Version Manager (nvm)

We are using `nvm` to manage your NodeJS versions. To install or update nvm, you may use the following cURL or Wget command:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

or

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Running either of the above commands downloads a script and runs it. The script clones the nvm repository to ~/.nvm, and attempts to add the source lines from the snippet below to the correct profile file (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`).

##### Install NodeJS

To install NodeJS and use the version specified in the `.nvmrc` file, run the following commands:

```bash
nvm install
```

This command will install the NodeJS version specified in the `.nvmrc` file. To use the NodeJS version specified in the `.nvmrc` file, run the following command:

```bash
nvm use
```

#### Package Manager

We are using [pnpm](https://pnpm.io/) a fast, disk space efficient package manager. To install `pnpm`, run the following command:

##### For Windows

```bash
$env:PNPM_VERSION = "10.0.0"; Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
```

##### For POSIX (MacOS, Linux, etc.)

```bash
curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=10.0.0 sh -
```

or

```bash
wget -qO- https://get.pnpm.io/install.sh | env PNPM_VERSION=10.0.0 sh -
```

### Get Started

1. Clone the repository:

```bash
git clone
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the Supabase server:

```bash
supabase start
```

4. Copy environment variables:

```bash
cp .env.example .env
```

You can find the Supabase URL and anon key by running the following command:

```bash
supabase status
```
