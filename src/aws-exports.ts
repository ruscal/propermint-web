import cdkExports from '../cdk-exports.json';

const config = {
    aws_project_region: cdkExports.PropermintCdkStack.ProjectRegion,
    aws_cognito_region: cdkExports.PropermintCdkStack.ProjectRegion,
    aws_user_pools_id: cdkExports.PropermintCdkStack.UserPoolId,
    aws_user_pools_web_client_id:
        cdkExports.PropermintCdkStack.UserPoolClientId,
    aws_cognito_identity_pool_id: cdkExports.PropermintCdkStack.IdentityPoolId,
    aws_appsync_graphqlEndpoint: cdkExports.PropermintCdkStack.GraphQLAPIURL,
    aws_appsync_apiKey: cdkExports.PropermintCdkStack.AppSyncAPIKey,
    aws_appsync_authenticationType: 'API_KEY',
    Storage: {
        AWSS3: {
            bucket: cdkExports.PropermintCdkStack.ImageRepositoryBucket,
            region: cdkExports.PropermintCdkStack.ProjectRegion
        }
    }
};

export default config;
