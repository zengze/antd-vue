<template>
  <div>
    <a-form
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            { rules: [{ required: true, message: 'Please input your username!' }] }
          ]"
          placeholder="Username"
        >
          <a-icon slot="prefix" type="user"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: 'Please input your Password!' }] }
          ]"
          type="password"
          placeholder="Password"
        >
          <a-icon slot="prefix" type="lock"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true,
            }
          ]"
        >
          Remember me
        </a-checkbox>
        <a
          class="login-form-forgot"
        >
          Forgot password
        </a>
        <a-button
          type="primary"
          html-type="submit"
          class="login-form-button"
        >
          Log in
        </a-button>
        Or
        <a>register now!</a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { encode } from '@/common/crypto/hash.js'
import { userInfo } from '@/common/static/userInfo.js'

export default {
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          let userName = values.userName
          let password = encode('sha1', values.password)
          if (userInfo[userName] !== undefined) {
            if (userInfo[userName] === password) {
              alert('登录成功')
              let user = { userName: userName, password: password }
              localStorage.user = JSON.stringify(user)
              this.$router.push('home')
            } else {
              alert('密码错误')
            }
          } else {
            alert('用户不存在')
          }
        }
      })
    }
  }
}
</script>

<style>
.login-form {
  max-width: 300px;
    margin: auto;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}
</style>
