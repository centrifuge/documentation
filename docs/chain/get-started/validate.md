---
id: validate
order: 5
title: Start to Validate on Amber/Flint Testnet
category: 2. Get Started
---

1. Open the Portal:

    a) Amber: http://35.198.185.220/#?rpc=ws://35.246.192.167:9944

    b) Flint: http://35.198.185.220/#?rpc=ws://35.234.84.110:9944

1. Create a new key pair for your validator – a stash account (`Vanessa Stash` in this example) that is holding the funds to be staked/bonded and can transfer them, and a separate controller account (`Vanessa` in this example) that will be able to switch between validating/nominating/chilling and can set session keys, which will be used for the validator tasks such as block proposals, finalization etc: ![](../../../src/images/chain/stash-account.png) ![](../../../src/images/chain/controller-account.png)

1. Send tokens to your stash (for staking) and controller accounts (small amount to pay fees for actions) as described above. In order to become a validator, the stash account needs to own enough tokens to replace another validator in the next era. ![](../../../src/images/chain/send-funds.png)


1. Head over to the staking screen and create a new stake ![](../../../src/images/chain/staking-screen.png) ![](../../../src/images/chain/new-stake.png)

1. Set the session keys you obtained in the [previous chapter](#Run-your-own-node-on-AmberFlint): ![](../../../src/images/chain/account-actions.png) ![](../../../src/images/chain/set-session-key.png)

1. You are ready to start validating! Change your status to validating by clicking "Validate": ![](../../../src/images/chain/account-actions-2.png) ![](../../../src/images/chain/status-validate.png)

1. In the staking overview, you should now see your validator in the "Next Up" column: ![](../../../src/images/chain/staking-overview.png) If validator slots are empty or if your validator has a higher stake bonded then an active validator, it will enter the validator set at the next era change (at most in 24 hours on Amber/Flint): ![](../../../src/images/chain/next-up.png)

1. All done! If you want to stop validating, head back to "Account actions" and click "Stop Validating" ![](../../../src/images/chain/stop-validating.png) You should now see that your validator is no longer selected for the next era (at most in 24 hours on Amber/Flint): ![](../../../src/images/chain/not-selected.png) After the next era change, your validator should go back to idling and no longer show up in the Staking overview: ![](../../../src/images/chain/idling.png)

