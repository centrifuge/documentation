---
id: validate
order: 5
title: Start to Validate on Amber/Flint Testnet
category: 2. Get Started
---

## Start to Validate on Amber/Flint Testnet

1. Open the Portal: 
    
    a) Amber: http://35.198.185.220/#?rpc=ws://35.246.192.167:9944
    
    b) Flint: http://35.198.185.220/#?rpc=ws://35.234.84.110:9944

1. Create a new key pair for your validator – a stash account (`Vanessa Stash` in this example) that is holding the funds to be staked/bonded and can transfer them, and a separate controller account (`Vanessa` in this example) that will be able to switch between validating/nominating/chilling and can set session keys, which will be used for the validator tasks such as block proposals, finalization etc: ![](https://storage.googleapis.com/centrifuge-hackmd/upload_49b9d8cf5c252485ef65f49de6c7e73d.png) ![](https://storage.googleapis.com/centrifuge-hackmd/upload_68118de5d6bd0403d32dda01974b795d.png)

1. Send tokens to your stash (for staking) and controller accounts (small amount to pay fees for actions) as described above. In order to become a validator, the stash account needs to own enough tokens to replace another validator in the next era. ![](https://storage.googleapis.com/centrifuge-hackmd/upload_fff2046a03488ce6050088af12429861.png)
 ![](https://storage.googleapis.com/centrifuge-hackmd/upload_66319501be932f46870c3fada9274f06.png)

1. Head over to the staking screen and create a new stake ![](https://storage.googleapis.com/centrifuge-hackmd/upload_a32f0915632853d553da03d99cd60d9c.png) ![](https://storage.googleapis.com/centrifuge-hackmd/upload_50ab646c6e628f4b1465fe040b47491b.png)

1. Set the session keys you obtained in the [previous chapter](#Run-your-own-node-on-AmberFlint): ![](https://storage.googleapis.com/centrifuge-hackmd/upload_b092fe97cc4271c2d3a35a3325f8c0bc.png) ![](https://storage.googleapis.com/centrifuge-hackmd/upload_7d603ce8425580709527ff2e7356c252.png)

1. You are ready to start validating! Change your status to validating by clicking "Validate": ![](https://storage.googleapis.com/centrifuge-hackmd/upload_03a93eb7700f3bc91ed07eeb38a3566a.png) ![](https://storage.googleapis.com/centrifuge-hackmd/upload_6d74caf806734bdda36e9cec8fd1c9be.png)

1. In the staking overview, you should now see your validator in the "Next Up" column: ![](https://storage.googleapis.com/centrifuge-hackmd/upload_c2f4187a9ab2469acd6c92e1ae2746fc.png) If validator slots are empty or if your validator has a higher stake bonded then an active validator, it will enter the validator set at the next era change (at most in 24 hours on Amber/Flint): ![](https://storage.googleapis.com/centrifuge-hackmd/upload_c82dfe299d6c5f1c6833f28b58385c60.png)

1. All done! If you want to stop validating, head back to "Account actions" and click "Stop Validating" ![](https://storage.googleapis.com/centrifuge-hackmd/upload_53078ce7c1191c22e806e853fb1cb3e2.png) You should now see that your validator is no longer selected for the next era (at most in 24 hours on Amber/Flint): ![](https://storage.googleapis.com/centrifuge-hackmd/upload_ab26bb97ce691041e03a631a0803e443.png) After the next era change, your validator should go back to idling and no longer show up in the Staking overview: ![](https://storage.googleapis.com/centrifuge-hackmd/upload_822ed3b62ab3326857573145d61b1f22.png)

