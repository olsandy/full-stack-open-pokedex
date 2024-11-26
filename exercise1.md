CI points

Linting, testing and building in Python

In Python, there are several packages for linting. One of them is flake8 (https://flake8.pycqa.org/en/latest/). Flake8 has a VS Code extension, which makes it easy to use in the code editor.

For testing, we can use the package pytest and for building, setuptools.

Especially, if we host the app in the cloud, we could use AWS CodePipeline as the CI tool. AWS CodePipeline also integrates with GitHub.

In deciding between on-premise and cloud environment, several factors come into play. If we use the cloud, we can integrate with the CI solution of that cloud provider e.g., AWS CodePipeline. We can enable automatic cloud resource provisioning easily in AWS, which increases our level of automation. An on-premise solution would give us more ultimate control, but is more complicated to setup.

One question is storage and databases. If we have binary data or files to store, that could be done quite clearly with a cloud provider, for instance S3 in AWS or Blob storage in Azure. It would make our environment simpler, if we had everything in one cloud environment with common credentials, instead of spreading out our infrastructure between many non-related services.

In practice, we should probably use the environment that the rest of our operation is based on, if we are not creating a software business from scratch.
